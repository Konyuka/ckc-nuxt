<template>
    <section class="trust-badges-area pt-80 pb-80" style="background-color: #0d0d0d;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="trust-content text-center">
                        <h5 class="trust-title">Trusted by Leading Businesses Across East Africa</h5>
                        <div class="badges-grid">
                            <div class="badge-item wow fadeIn" data-animation="fadeIn" data-delay=".1s">
                                <div class="badge-icon"><i class="fas fa-shield-check"></i></div>
                                <span>Quality Guaranteed</span>
                            </div>
                            <div class="badge-item wow fadeIn" data-animation="fadeIn" data-delay=".2s">
                                <div class="badge-icon"><i class="fas fa-truck-fast"></i></div>
                                <span>Nationwide Delivery</span>
                            </div>
                            <div class="badge-item wow fadeIn" data-animation="fadeIn" data-delay=".3s">
                                <div class="badge-icon"><i class="fas fa-tools"></i></div>
                                <span>Expert Installation</span>
                            </div>
                            <div class="badge-item wow fadeIn" data-animation="fadeIn" data-delay=".4s">
                                <div class="badge-icon"><i class="fas fa-headset"></i></div>
                                <span>24/7 Support</span>
                            </div>
                            <div class="badge-item wow fadeIn" data-animation="fadeIn" data-delay=".5s">
                                <div class="badge-icon"><i class="fas fa-certificate"></i></div>
                                <span>Certified Equipment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.trust-title {
    color: #888;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 40px;
}

.badges-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
}

.badge-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.badge-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, rgba(244, 118, 41, 0.1), rgba(244, 118, 41, 0.05));
    border: 1px solid rgba(244, 118, 41, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.badge-icon i {
    font-size: 28px;
    color: #f47629;
}

.badge-item:hover .badge-icon {
    background: linear-gradient(135deg, #f47629, #ff9a5a);
    border-color: transparent;
    transform: scale(1.1);
}

.badge-item:hover .badge-icon i {
    color: #fff;
}

.badge-item span {
    color: #aaa;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@media (max-width: 768px) {
    .badges-grid {
        gap: 25px;
    }

    .badge-icon {
        width: 60px;
        height: 60px;
    }

    .badge-icon i {
        font-size: 24px;
    }

    .badge-item span {
        font-size: 11px;
    }
}
</style>
