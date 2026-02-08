#!/bin/bash

# Create directories
mkdir -p public/images/gallery
mkdir -p public/images/logos
mkdir -p public/images/services

# Logo
wget -O public/images/logos/logo.png "https://deratisation-77.com/wp-content/uploads/2025/04/logo.png"
wget -O public/images/logos/certibiocide.png "https://deratisation-77.com/wp-content/uploads/2025/04/logos4.png"
wget -O public/images/logos/fredon.png "https://deratisation-77.com/wp-content/uploads/2025/04/logos2.png"
wget -O public/images/logos/gdsa77.png "https://deratisation-77.com/wp-content/uploads/2025/04/logos1.png"
wget -O public/images/logos/ministere.webp "https://deratisation-77.com/wp-content/uploads/2025/05/logos5-_1_.webp"

# Favicon
wget -O public/favicon.ico "https://deratisation-77.com/favicon.ico"

# Gallery Images
# Ramonage
wget -O public/images/gallery/ramonage-poele-allume.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/40-rotated.jpg"
wget -O public/images/gallery/ramonage-poele-installe.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/39-rotated.jpg"
wget -O public/images/gallery/ramonage-bistre-1.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/38.jpg"
wget -O public/images/gallery/ramonage-bistre-2.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/37.jpg"
wget -O public/images/gallery/ramonage-foyer-nettoye.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/34.jpg"
wget -O public/images/gallery/ramonage-conduit.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/33.jpg"

# Rongeurs
wget -O public/images/gallery/rongeurs-infestation.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/27.jpg"
wget -O public/images/gallery/rongeurs-pieges.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/24.jpg"
wget -O public/images/gallery/rongeurs-excrements.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/23-rotated.jpg"
wget -O public/images/gallery/rongeurs-colonie.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/vitesse-multiplication-souris-et-rats.jpg"

# Chenilles
wget -O public/images/gallery/chenilles-sapin-cocon.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/25.jpg"
wget -O public/images/gallery/chenilles-nid.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/7.jpg"
wget -O public/images/gallery/chenilles-intervention.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/4-rotated.jpg"

# Frelons / Guepes
wget -O public/images/gallery/frelons-combles.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/21.jpg"
wget -O public/images/gallery/frelons-detruits.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/20.jpg"
wget -O public/images/gallery/frelons-larves.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/19.jpg"
wget -O public/images/gallery/frelons-arbre.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/17.jpg"
wget -O public/images/gallery/frelons-intervention.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/11.png"

# Demoussage
wget -O public/images/gallery/toiture-mousse.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/41.jpg"
wget -O public/images/gallery/toiture-nettoyage.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/PJ_12.jpg"

# Tenue Pro
wget -O public/images/gallery/tenue-pro.jpg "https://deratisation-77.com/wp-content/uploads/2025/04/18.jpg"

echo "Downloads completed."
