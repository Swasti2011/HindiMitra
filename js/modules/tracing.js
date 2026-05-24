// Interactive HTML5 Canvas Tracing Engine for Hindi Letter Writing

class TracingEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.offscreenCanvas = null;
    this.offscreenCtx = null;
    
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.letter = '';
    
    // Brush settings
    this.brushColor = '#6366f1'; // Vibrant Indigo
    this.brushSize = 16;
    
    // Scale factor for high DPI screens
    this.scale = 1;
  }

  /**
   * Bind and initialize the tracing canvas.
   * @param {HTMLCanvasElement} canvasElement - The canvas element in DOM.
   * @param {string} letter - The Hindi character to trace.
   */
  init(canvasElement, letter) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.letter = letter;

    // Create offscreen canvas for pixel matching template
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCtx = this.offscreenCanvas.getContext('2d', { willReadFrequently: true });

    // Handle high DPI displays
    this.resizeAndScale();

    // Reset drawing state
    this.isDrawing = false;

    // Attach interaction listeners
    this.attachEventListeners();

    // Initial render of templates
    this.drawTemplates();
  }

  resizeAndScale() {
    if (!this.canvas) return;

    // Get display size
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width || 320;
    const height = rect.height || 320;

    // Scale coordinates for high-res screens
    this.scale = window.devicePixelRatio || 1;
    
    this.canvas.width = width * this.scale;
    this.canvas.height = height * this.scale;
    this.ctx.scale(this.scale, this.scale);

    this.offscreenCanvas.width = width * this.scale;
    this.offscreenCanvas.height = height * this.scale;
    this.offscreenCtx.scale(this.scale, this.scale);
  }

  drawTemplates() {
    const w = this.canvas.width / this.scale;
    const h = this.canvas.height / this.scale;

    // 1. Draw Template on VISIBLE Canvas (Light Grey Letter in Center)
    this.ctx.clearRect(0, 0, w, h);
    
    // Draw background dashed grid for guide (traditional school notebook style)
    this.ctx.strokeStyle = '#e0e7ff'; // light indigo grid
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 4]);
    
    // Horizontal center line
    this.ctx.beginPath();
    this.ctx.moveTo(0, h / 2);
    this.ctx.lineTo(w, h / 2);
    this.ctx.stroke();

    // Vertical center line
    this.ctx.beginPath();
    this.ctx.moveTo(w / 2, 0);
    this.ctx.lineTo(w / 2, h);
    this.ctx.stroke();

    // Reset line dash
    this.ctx.setLineDash([]);

    // Draw target text on Visible Canvas
    this.ctx.font = 'bold 150px "Baloo 2", sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    
    // Soft transparent gray for writing guide
    this.ctx.fillStyle = '#e2e8f0';
    this.ctx.fillText(this.letter, w / 2, h / 2 + 10); // Offset down slightly for Baloo baseline alignment

    // 2. Draw Target on OFFSCREEN Canvas (Solid black template mask for pixel counting)
    this.offscreenCtx.clearRect(0, 0, w, h);
    this.offscreenCtx.font = 'bold 150px "Baloo 2", sans-serif';
    this.offscreenCtx.textAlign = 'center';
    this.offscreenCtx.textBaseline = 'middle';
    
    // Render strictly in deep solid red to isolate it in the ImageData channels
    this.offscreenCtx.fillStyle = '#ff0000';
    this.offscreenCtx.fillText(this.letter, w / 2, h / 2 + 10);
  }

  attachEventListeners() {
    // Prevent scrolling on touch devices when tracing
    const preventDefault = (e) => {
      if (e.target === this.canvas) {
        e.preventDefault();
      }
    };
    document.body.addEventListener('touchstart', preventDefault, { passive: false });
    document.body.addEventListener('touchmove', preventDefault, { passive: false });

    // Mouse Listeners
    this.canvas.addEventListener('mousedown', (e) => this.start(e.clientX, e.clientY));
    this.canvas.addEventListener('mousemove', (e) => this.move(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => this.stop());

    // Touch Listeners
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.start(e.touches[0].clientX, e.touches[0].clientY);
      }
    });
    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        this.move(e.touches[0].clientX, e.touches[0].clientY);
      }
    });
    window.addEventListener('touchend', () => this.stop());
  }

  start(clientX, clientY) {
    this.isDrawing = true;
    const { x, y } = this.getCoords(clientX, clientY);
    this.lastX = x;
    this.lastY = y;
    
    // Draw initial dot on click
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.brushSize / 2, 0, Math.PI * 2);
    this.ctx.fillStyle = this.brushColor;
    this.ctx.fill();
  }

  move(clientX, clientY) {
    if (!this.isDrawing) return;
    const { x, y } = this.getCoords(clientX, clientY);

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(x, y);
    this.ctx.strokeStyle = this.brushColor;
    this.ctx.lineWidth = this.brushSize;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.stroke();

    this.lastX = x;
    this.lastY = y;
  }

  stop() {
    this.isDrawing = false;
  }

  getCoords(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  /**
   * Reset canvas back to template letter.
   */
  clear() {
    this.drawTemplates();
  }

  /**
   * Performs pixel analysis comparing visible canvas (user tracing) with offscreen canvas (target template).
   * @returns {object} scoreReport - { score: 0-100, rating: string }
   */
  evaluate() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Capture Image Data for both canvases
    const userImgData = this.ctx.getImageData(0, 0, w, h);
    const templateImgData = this.offscreenCtx.getImageData(0, 0, w, h);
    
    const userPixels = userImgData.data;
    const templatePixels = templateImgData.data;

    let targetTotalPixels = 0; // Pixels belonging to the original letter template
    let userCorrectOverlap = 0; // Pixels where user colored inside the letter body
    let userStrayPixels = 0; // Pixels where user drew outside the letter template

    // Check pixel indices (increment by 4 for R, G, B, A values)
    // To speed up performance, we sample every 4th pixel grid (stride of 16 bytes = 4 pixels)
    for (let i = 0; i < userPixels.length; i += 16) {
      const templateAlpha = templatePixels[i + 3]; // Template alpha
      const templateRed = templatePixels[i];       // Solid red template marker
      
      const userAlpha = userPixels[i + 3];         // User drawing alpha
      const userRed = userPixels[i];
      const userGreen = userPixels[i + 1];
      const userBlue = userPixels[i + 2];
      
      // Determine if a pixel belongs to the template (Red channel is > 100 in mask)
      const isTemplatePixel = templateAlpha > 50 && templateRed > 100;
      
      // Determine if a pixel has been drawn by the user
      // We check if it is active and NOT the light gray guide color (#e2e8f0 is RGB: 226, 232, 240)
      const isUserDrawn = userAlpha > 100 && !(userRed === 226 && userGreen === 232 && userBlue === 240);

      if (isTemplatePixel) {
        targetTotalPixels++;
        if (isUserDrawn) {
          userCorrectOverlap++;
        }
      } else if (isUserDrawn) {
        userStrayPixels++;
      }
    }

    if (targetTotalPixels === 0) {
      return { score: 0, rating: 'अक्षर लिखें (Write Letter)' };
    }

    // Calculations
    const coverageRatio = userCorrectOverlap / targetTotalPixels;
    const coveragePercentage = Math.round(coverageRatio * 100);

    // Stray Penalty: ratio of stray pixels compared to total target pixels
    const strayRatio = userStrayPixels / targetTotalPixels;
    const strayPenalty = Math.round(strayRatio * 50); // capping stray penalty rate

    // Calculate final score
    let finalScore = coveragePercentage - strayPenalty;
    if (finalScore < 0) finalScore = 0;
    if (finalScore > 100) finalScore = 100;

    let rating = 'प्रयास करें (Try Again)';
    let message = 'सटीकता से लाइनों के ऊपर ट्रेस करें!';
    let success = false;

    if (finalScore >= 85) {
      rating = 'उत्कृष्ट! (Superb!)';
      message = 'शानदार लिखावट! आपने बहुत सफाई से लिखा है।';
      success = true;
    } else if (finalScore >= 60) {
      rating = 'बहुत अच्छा! (Very Good!)';
      message = 'बहुत बढ़िया! अक्षर की बनावट बिलकुल सही है।';
      success = true;
    } else if (finalScore >= 35) {
      rating = 'अच्छा प्रयास! (Good Try!)';
      message = 'अच्छा अभ्यास है! थोड़ा और प्रयास करें।';
      success = false;
    }

    return {
      score: finalScore,
      coverage: coveragePercentage,
      stray: strayPenalty,
      rating,
      message,
      success
    };
  }
}

export const tracingEngine = new TracingEngine();
export default tracingEngine;
