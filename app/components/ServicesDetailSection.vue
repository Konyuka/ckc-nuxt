<template>
    <section class="services-detail-area pt-100 pb-100" style="background-color: #0d0d0d;">
        <div class="container">
            <!-- Section Title -->
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center mb-60">
                        <h5><span class="line"> <img src="/img/bg/circle_right.png" alt="circle_right"></span> Our
                            Expertise</h5>
                        <h2>Comprehensive Kitchen Solutions</h2>
                        <p class="section-subtitle">From initial concept to final handover, we provide end-to-end
                            commercial kitchen services tailored to your unique requirements.</p>
                    </div>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="services-detail-grid">
                <!-- Service 1: Kitchen Design -->
                <div class="service-detail-card wow fadeInUp" data-animation="fadeInUp">
                    <div class="service-detail-icon">
                        <i class="fas fa-drafting-compass"></i>
                    </div>
                    <div class="service-detail-content">
                        <h4>Kitchen Design & Layout Concepts</h4>
                        <p>Our expertise in kitchen design and layout allows us to create innovative and efficient
                            spaces tailored to your specific needs. We utilize the latest design concepts, considering
                            factors such as workflow optimization, spatial efficiency, and ergonomics. Our team
                            collaborates closely with you to understand your menu, operational requirements, and desired
                            aesthetic.</p>
                        <ul class="service-features">
                            <li><i class="fas fa-check"></i> Workflow optimization</li>
                            <li><i class="fas fa-check"></i> HACCP compliance</li>
                            <li><i class="fas fa-check"></i> 2D/3D layouts</li>
                        </ul>
                    </div>
                </div>

                <!-- Service 2: Equipment Selection -->
                <div class="service-detail-card wow fadeInUp" data-animation="fadeInUp" data-delay=".1s">
                    <div class="service-detail-icon">
                        <i class="fas fa-clipboard-list"></i>
                    </div>
                    <div class="service-detail-content">
                        <h4>Equipment Selection</h4>
                        <p>Selecting the right equipment is critical for the success of your commercial kitchen. Our
                            in-depth knowledge of the industry and strong supplier partnerships enable us to recommend
                            the most suitable equipment for your specific needs. We consider menu requirements,
                            production capacity, energy efficiency, durability, and budget constraints.</p>
                        <ul class="service-features">
                            <li><i class="fas fa-check"></i> Menu-specific recommendations</li>
                            <li><i class="fas fa-check"></i> Energy efficiency focus</li>
                            <li><i class="fas fa-check"></i> Budget optimization</li>
                        </ul>
                    </div>
                </div>

                <!-- Service 3: Supplier Qualification -->
                <div class="service-detail-card wow fadeInUp" data-animation="fadeInUp" data-delay=".2s">
                    <div class="service-detail-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <div class="service-detail-content">
                        <h4>Supplier Qualification</h4>
                        <p>Navigating the numerous equipment suppliers in the market can be overwhelming. Our supplier
                            qualification process streamlines selection and ensures you partner with reputable and
                            reliable suppliers. We conduct thorough assessments of suppliers' track records, product
                            quality, service levels, and pricing structures.</p>
                        <ul class="service-features">
                            <li><i class="fas fa-check"></i> Verified suppliers</li>
                            <li><i class="fas fa-check"></i> Quality assurance</li>
                            <li><i class="fas fa-check"></i> Risk mitigation</li>
                        </ul>
                    </div>
                </div>

                <!-- Service 4: Procurement -->
                <div class="service-detail-card wow fadeInUp" data-animation="fadeInUp" data-delay=".3s">
                    <div class="service-detail-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="service-detail-content">
                        <h4>Procurement</h4>
                        <p>Our team manages the procurement process from start to finish, ensuring a smooth and
                            hassle-free experience. We leverage our industry connections and negotiate competitive
                            pricing on your behalf. We handle order placement, manage logistics, and coordinate with
                            suppliers to ensure timely delivery.</p>
                        <ul class="service-features">
                            <li><i class="fas fa-check"></i> Competitive pricing</li>
                            <li><i class="fas fa-check"></i> Logistics management</li>
                            <li><i class="fas fa-check"></i> Timely delivery</li>
                        </ul>
                    </div>
                </div>

                <!-- Service 5: Project Management -->
                <div class="service-detail-card wow fadeInUp" data-animation="fadeInUp" data-delay=".4s">
                    <div class="service-detail-icon">
                        <i class="fas fa-tasks"></i>
                    </div>
                    <div class="service-detail-content">
                        <h4>Project Management</h4>
                        <p>We understand that managing a commercial kitchen project requires coordination among various
                            stakeholders. As your dedicated project managers, we oversee the entire process from initial
                            concept to final handover. We handle supplier coordination, timeline management, quality
                            control, and communication with contractors.</p>
                        <ul class="service-features">
                            <li><i class="fas fa-check"></i> End-to-end oversight</li>
                            <li><i class="fas fa-check"></i> Timeline management</li>
                            <li><i class="fas fa-check"></i> Quality control</li>
                        </ul>
                    </div>
                </div>

                <!-- Service 6: Import Advisory -->
                <div class="service-detail-card wow fadeInUp" data-animation="fadeInUp" data-delay=".5s">
                    <div class="service-detail-icon">
                        <i class="fas fa-ship"></i>
                    </div>
                    <div class="service-detail-content">
                        <h4>Import Advisory</h4>
                        <p>Our Import Advisory service is designed to provide professional guidance and support for
                            individuals who prefer to personally import their equipment. By leveraging our vast network
                            and relationships with international suppliers, we source high-quality equipment at
                            competitive prices.</p>
                        <ul class="service-features">
                            <li><i class="fas fa-check"></i> International sourcing</li>
                            <li><i class="fas fa-check"></i> Cost-effective solutions</li>
                            <li><i class="fas fa-check"></i> Expert guidance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.section-subtitle {
    color: #888;
    font-size: 16px;
    max-width: 600px;
    margin: 20px auto 0;
    line-height: 1.7;
}

.services-detail-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.service-detail-card {
    background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%);
    border-radius: 20px;
    padding: 40px;
    display: flex;
    gap: 25px;
    transition: all 0.4s ease;
    border: 1px solid transparent;
}

.service-detail-card:hover {
    transform: translateY(-5px);
    border-color: #f47629;
    box-shadow: 0 20px 50px rgba(244, 118, 41, 0.15);
}

.service-detail-icon {
    width: 80px;
    height: 80px;
    min-width: 80px;
    background: linear-gradient(135deg, #f47629, #ff9a5a);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(244, 118, 41, 0.3);
}

.service-detail-icon i {
    font-size: 32px;
    color: #fff;
}

.service-detail-content h4 {
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
}

.service-detail-content p {
    color: #aaa;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px;
}

.service-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.service-features li {
    background: rgba(244, 118, 41, 0.1);
    color: #f47629;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
}

.service-features li i {
    margin-right: 6px;
    font-size: 11px;
}

@media (max-width: 992px) {
    .services-detail-grid {
        grid-template-columns: 1fr;
    }

    .service-detail-card {
        flex-direction: column;
        text-align: center;
    }

    .service-detail-icon {
        margin: 0 auto;
    }

    .service-features {
        justify-content: center;
    }
}
</style>
