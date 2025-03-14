<?php include 'config.php'; ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $company_info['name']; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="<?php echo $company_info['logo']; ?>" alt="Logo" class="navbar-logo">
                <?php echo $company_info['name']; ?>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#inicio">INICIO</a></li>
                    <li class="nav-item"><a class="nav-link" href="#nosotros">NOSOTROS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#valores">VALORES</a></li>
                    <li class="nav-item"><a class="nav-link" href="#trabajos">TRABAJOS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contacto">CONTACTO</a></li>
                </ul>
            </div>
        </div>
    </nav>