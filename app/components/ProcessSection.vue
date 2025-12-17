<template>
  <section class="process-area pt-120 pb-120"
    style="background: linear-gradient(180deg, #0a0a0a 0%, #151515 50%, #0a0a0a 100%);">
    <div class="container">
      <!-- Section Title -->
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center mb-80">
            <h5><span class="line"> <img src="/img/bg/circle_right.png" alt="circle_right"></span> This is how we work
              together</h5>
            <h2>Our Process</h2>
            <p class="process-subtitle">From your initial vision to a fully operational kitchen, we guide you through
              every step of the journey.</p>
          </div>
        </div>
      </div>

      <!-- Timeline Process -->
      <div class="process-timeline">
        <!-- Step 1 -->
        <div class="timeline-item left wow fadeInLeft" data-animation="fadeInLeft">
          <div class="timeline-content">
            <div class="timeline-step">01</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-comments"></i>
              </div>
              <div class="timeline-info">
                <h4>Initial Consultation</h4>
                <p>We dive deep into your dreams, vision, and requirements. Together, we craft a plan that aligns with
                  your goals, budget, and unique needs. Consider us your kitchen confidantes.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="timeline-item right wow fadeInRight" data-animation="fadeInRight">
          <div class="timeline-content">
            <div class="timeline-step">02</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-pencil-ruler"></i>
              </div>
              <div class="timeline-info">
                <h4>Design & Layout</h4>
                <p>Our experienced designers create customized kitchen layouts optimized for workflow, space
                  utilization, and regulatory compliance to maximize your efficiency.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="timeline-item left wow fadeInLeft" data-animation="fadeInLeft">
          <div class="timeline-content">
            <div class="timeline-step">03</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-clipboard-list"></i>
              </div>
              <div class="timeline-info">
                <h4>Equipment Selection</h4>
                <p>We help you select the best equipment based on menu requirements, capacity needs, budget constraints,
                  and quality standards for optimal performance.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="timeline-item right wow fadeInRight" data-animation="fadeInRight">
          <div class="timeline-content">
            <div class="timeline-step">04</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="timeline-info">
                <h4>Supplier & Procurement</h4>
                <p>We handle supplier qualification, negotiate competitive pricing, manage orders, and coordinate
                  logistics for seamless, timely delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="timeline-item left wow fadeInLeft" data-animation="fadeInLeft">
          <div class="timeline-content">
            <div class="timeline-step">05</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-tasks"></i>
              </div>
              <div class="timeline-info">
                <h4>Project Management</h4>
                <p>As your dedicated project managers, we coordinate with all stakeholders to ensure smooth progress,
                  timely execution, and adherence to quality standards.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 6 -->
        <div class="timeline-item right wow fadeInRight" data-animation="fadeInRight">
          <div class="timeline-content">
            <div class="timeline-step">06</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-tools"></i>
              </div>
              <div class="timeline-info">
                <h4>Installation & Testing</h4>
                <p>Our team coordinates professional installation ensuring compliance with regulations, followed by
                  rigorous testing and quality checks.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 7 -->
        <div class="timeline-item left wow fadeInLeft" data-animation="fadeInLeft">
          <div class="timeline-content">
            <div class="timeline-step">07</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-file-signature"></i>
              </div>
              <div class="timeline-info">
                <h4>Handover & Documentation</h4>
                <p>Complete handover with all documentation including warranties, operating manuals, and maintenance
                  guidelines for your records.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 8 -->
        <div class="timeline-item right wow fadeInRight" data-animation="fadeInRight">
          <div class="timeline-content">
            <div class="timeline-step">08</div>
            <div class="timeline-card">
              <div class="timeline-icon">
                <i class="fas fa-cogs"></i>
              </div>
              <div class="timeline-info">
                <h4>Maintenance Contracts</h4>
                <p>We facilitate comprehensive maintenance contracts ensuring regular upkeep and servicing to keep your
                  equipment in excellent condition.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 9 - Final -->
        <div class="timeline-item center wow fadeInUp" data-animation="fadeInUp">
          <div class="timeline-content final">
            <div class="timeline-step final-step">
              <i class="fas fa-star"></i>
            </div>
            <div class="timeline-card final-card">
              <div class="timeline-icon final-icon">
                <i class="fas fa-trophy"></i>
              </div>
              <div class="timeline-info">
                <h4>Your Success Story</h4>
                <p>Your fully functional kitchen is ready to create memorable experiences and drive your business
                  forward. We celebrate your success together!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline Line -->
        <div class="timeline-line"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.process-subtitle {
  color: #888;
  font-size: 18px;
  max-width: 600px;
  margin: 20px auto 0;
  line-height: 1.7;
}

.mb-80 {
  margin-bottom: 80px;
}

.process-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 80px;
  width: 4px;
  background: linear-gradient(180deg, #f47629 0%, #ff9a5a 50%, #f47629 100%);
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  width: 50%;
}

.timeline-item.left {
  padding-right: 60px;
  text-align: right;
}

.timeline-item.right {
  margin-left: 50%;
  padding-left: 60px;
  text-align: left;
}

.timeline-item.center {
  width: 100%;
  text-align: center;
  padding: 0;
}

.timeline-content {
  position: relative;
}

.timeline-step {
  position: absolute;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f47629, #ff9a5a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 18px;
  color: #fff;
  box-shadow: 0 0 30px rgba(244, 118, 41, 0.5);
  z-index: 2;
}

.timeline-item.left .timeline-step {
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-item.right .timeline-step {
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-item.center .timeline-step {
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
}

.timeline-step.final-step {
  width: 60px;
  height: 60px;
  font-size: 24px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 30px rgba(244, 118, 41, 0.5);
  }

  50% {
    box-shadow: 0 0 50px rgba(244, 118, 41, 0.8);
  }

  100% {
    box-shadow: 0 0 30px rgba(244, 118, 41, 0.5);
  }
}

.timeline-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid rgba(244, 118, 41, 0.2);
  transition: all 0.4s ease;
}

.timeline-card:hover {
  border-color: #f47629;
  transform: scale(1.02);
  box-shadow: 0 20px 50px rgba(244, 118, 41, 0.2);
}

.timeline-item.left .timeline-card {
  flex-direction: row-reverse;
}

.timeline-item.center .timeline-card {
  max-width: 500px;
  margin: 50px auto 0;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #f47629 200%);
  border: 2px solid #f47629;
}

.timeline-icon {
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: rgba(244, 118, 41, 0.15);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.timeline-card:hover .timeline-icon {
  background: linear-gradient(135deg, #f47629, #ff9a5a);
}

.timeline-icon i {
  font-size: 24px;
  color: #f47629;
  transition: all 0.4s ease;
}

.timeline-card:hover .timeline-icon i {
  color: #fff;
}

.timeline-icon.final-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f47629, #ff9a5a);
  border-radius: 50%;
}

.timeline-icon.final-icon i {
  font-size: 32px;
  color: #fff;
}

.timeline-info h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.timeline-info p {
  color: #aaa;
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}

.timeline-item.center .timeline-info h4 {
  font-size: 24px;
  color: #f47629;
}

.timeline-item.center .timeline-info p {
  color: #ccc;
}

@media (max-width: 768px) {
  .timeline-line {
    left: 20px;
  }

  .timeline-item,
  .timeline-item.left,
  .timeline-item.right {
    width: 100%;
    margin-left: 0;
    padding-left: 60px;
    padding-right: 0;
    text-align: left;
  }

  .timeline-item.left .timeline-step,
  .timeline-item.right .timeline-step {
    left: -5px;
    right: auto;
  }

  .timeline-item.left .timeline-card {
    flex-direction: row;
  }

  .timeline-item.center {
    padding-left: 60px;
  }

  .timeline-item.center .timeline-step {
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
  }

  .timeline-item.center .timeline-card {
    margin: 0;
    max-width: 100%;
  }
}
</style>
