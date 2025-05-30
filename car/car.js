const cars = {
    i10: {
      name: "Hyundai i10",
      image: "/Sources/images/Economy/i10.jpg",
      specs: "80L | Manual | 5 People",
      price: 80
    },
    i20: {
      name: "Hyundai i20",
      image: "/Sources/images/Economy/i20.png",
      specs: "90L | Manual | 5 People",
      price: 99
    },
    clio5: {
      name: "Renault Clio 5",
      image: "/Sources/images/Economy/clio 5.jpg",
      specs: "85L | Manual | 4 People",
      price: 96
    },
    picanto: {
      name: "Kia Picanto",
      image: "/Sources/images/Economy/kia picanto.jpg",
      specs: "70L | Auto/Manual | 4 People",
      price: 76
    },
    polo8: {
      name: "Volkswagen Polo 8",
      image: "/Sources/images/Economy/polo 8.jpg",
      specs: "95L | Auto | 5 People",
      price: 110
    },
    passat:{
      name: "Volkswagen Passat",
      image: "/Sources/images/luxury/passat.JPG",
      specs: "100L | Auto | 5 People",
      price: 260
    },
    seat:{
      name: "Seat ATECA",
      image: "/Sources/images/luxury/seat.png",
      specs: "100L | Auto | 5 People",
      price: 260
    },
    a5:{
      name: "Audi A5",
      image: "/Sources/images/luxury/a5.jpg",
      specs: "105L | Auto | 4 People",
      price: 290
    },
    classE:{
      name:"Mercedes class E",
      image:"/Sources/images/luxury/class E.png",
      specs: "110L | Auto | 4 People",
      price: 300
    },
    bmws3:{
      name:"BMW SÉRIE 3",
      image:"/Sources/images/luxury/bmw s3.jpg",
      specs: "110L | Auto | 4 People",
      price: 310
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const carKey = urlParams.get("car");
  const car = cars[carKey];

  if (car) {
    document.getElementById("car-name").textContent = car.name;
    document.getElementById("car-image").src = car.image;
    document.getElementById("car-specs").textContent = car.specs;
    document.getElementById("daily-rate").textContent = `${car.price} TND / day`;

    const totalDisplay = document.getElementById("total");

    const updateTotal = () => {
      const pickupDate = new Date(document.getElementById("pickup-date").value);
      const returnDate = new Date(document.getElementById("return-date").value);

      if (pickupDate && returnDate && returnDate > pickupDate) {
        const days = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
        const total = days * car.price;
        totalDisplay.textContent = `Total: TND ${total.toFixed(2)}`;
      } else {
        totalDisplay.textContent = "Total: TND 0";
      }
    };

    document.getElementById("pickup-date").addEventListener("change", updateTotal);
    document.getElementById("return-date").addEventListener("change", updateTotal);
  } else {
    document.querySelector(".car-container").innerHTML = "<p>Car not found.</p>";
  }

  function showConfirmation() {
    alert("Reservation Confirmed!\n\nYour booking has been successfully submitted.");
  }