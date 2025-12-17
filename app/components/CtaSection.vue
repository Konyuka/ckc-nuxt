<template>
    <section class="cta-area pt-100 pb-100" style="background: linear-gradient(135deg, #f47629 0%, #ff9a5a 100%);">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="cta-content wow fadeInLeft" data-animation="fadeInLeft">
                        <h2>Ready to Transform Your Commercial Kitchen?</h2>
                        <p>Let's discuss your project. From initial consultation to final handover, we're here to make
                            your culinary vision a reality.</p>
                    </div>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <div class="cta-buttons wow fadeInRight" data-animation="fadeInRight">
                        <a href="/contact" class="btn cta-btn-primary">Get Free Consultation</a>
                        <a href="tel:+254115511079" class="btn cta-btn-secondary">
                            <i class="fas fa-phone"></i> Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.cta-content h2 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 15px;
}

.cta-content p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin: 0;
}

.cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.cta-btn-primary {
    background: #000;
    color: #fff;
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    text-align: center;
}

.cta-btn-primary:hover {
    background: #fff;
    color: #f47629;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-btn-secondary {
    background: transparent;
    color: #fff;
    padding: 15px 35px;
    border-radius: 50px;
    border: 2px solid #fff;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    text-align: center;
}

.cta-btn-secondary:hover {
    background: #fff;
    color: #f47629;
}

.cta-btn-secondary i {
    margin-right: 8px;
}

@media (max-width: 992px) {
    .cta-content {
        text-align: center;
        margin-bottom: 30px;
    }

    .cta-buttons {
        align-items: center;
    }

    .text-lg-end {
        text-align: center !important;
    }
}

@media (max-width: 576px) {
    .cta-content h2 {
        font-size: 28px;
    }

    .cta-content p {
        font-size: 16px;
    }
}
</style>
