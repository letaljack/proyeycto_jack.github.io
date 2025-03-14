<footer class="bg-dark text-white py-4" id="contacto">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h5>Contacto</h5>
                <ul class="list-unstyled">
                    <li><i class="bi bi-geo-alt"></i> <?php echo $company_info['address']; ?></li>
                    <li><i class="bi bi-telephone"></i> <?php echo $company_info['phone1']; ?></li>
                    <li><i class="bi bi-telephone"></i> <?php echo $company_info['phone2']; ?></li>
                    <li><i class="bi bi-telephone"></i> <?php echo $company_info['phone3']; ?></li>
                    <li><i class="bi bi-telephone"></i> <?php echo $company_info['phone4']; ?></li>
                    <li><i class="bi bi-envelope"></i> <?php echo $company_info['email']; ?></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h5>Redes Sociales</h5>
                <div class="social-icons">
                    <a href="<?php echo $company_info['social']['facebook']; ?>" class="text-white"><i class="bi bi-facebook h3"></i></a>
                    <a href="<?php echo $company_info['social']['linkedin']; ?>" class="text-white mx-3"><i class="bi bi-linkedin h3"></i></a>
                    <a href="<?php echo $company_info['social']['instagram']; ?>" class="text-white"><i class="bi bi-instagram h3"></i></a>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <h6 class="container text-center">Destacamento de personal en la modalidad de suplencia temporal. Servicios complementarios y Servicios especializados</h6>
            </div>
        </div>
    </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/scripts.js"></script>
</body>

</html>
