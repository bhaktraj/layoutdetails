console.log('This is ES6 version of Project 1');
class Book {
    constructor(cname, mname, price,engine,power,torque,fueltank,
        gearbox,braking,mileage,speed,height,compression,clear,
        system,suspension,transmission,pic) {
        this.cname = cname;
        this.mname = mname;
        this.price = price;
        this.engine =engine;
        this.power = power;
        this.torque = torque;
        this.fueltank = fueltank;
        this.gearbox = gearbox;
        this.braking = braking;
        this.mileage = mileage;
        this.speed = speed;
        this.height = height;
        this.compression = compression;
        this.clear = clear;
        this.system = system;
        this.suspension = suspension;
        this.transmission = transmission;
        this.pic = pic;

    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let playout = document.getElementById('playout');
        let pstr = `<img src="${book.pic}" alt="" srcset="">`;
        playout.innerHTML += pstr;
        let glayout = document.getElementById('glayout');
        let comstr = `<h1>${book.mname}</h1>
        <div>
            <h2>${book.price}</h2>
            <h1 id="price1">Ex-Showroom Price</h1>
        </div>
        <h1>${book.cname}</h1>
        `;
        glayout.innerHTML += comstr;
        let lowerout = document.getElementById('lowerlout');
        let cstr = `<div class="lowerdetail">
        <div class="mbox">
            <h2>${book.compression}</h2>
            <h1>Cmpression</h1>
        </div>
        <div class="mbox">
            <h2>${book.clear}</h2>
            <h1>G/Clearance</h1>
        </div>
        <div class="mbox">
            <h2>${book.system}</h2>
            <h1>Fuel System</h1>
        </div>
        <div class="mbox">
            <h2>${book.suspension}
            </h2>
            <h1>Suspension</h1>
        </div>
        <div class="mbox">
            <h2>${book.transmission}</h2>
            <h1>Transmission</h1>
        </div>
    </div>`;
        lowerout.innerHTML +=cstr;
        let dlayout = document.getElementById('dlayout');
        let uiString = `<div class="container" id="tableBody">
        <div class="box">
            <h2>${book.engine}</h2>
            <h1>Engine</h1>
        </div>
        <div class="box">
            <h2>${book.power}</h2>
            <h1>Power</h1>
        </div>
        <div class="box">
            
            <h2>${book.torque}</h2>
            <h1>Torque</h1>
        </div>

    </div>
    <div class="container">
        <div class="box">
            <h2>${book.fueltank}</h2>
            <h1>Fuel Tank</h1>
        </div>
        <div class="box">
            <h2>${book.gearbox}</h2>
            <h1>GearBox</h1>
        </div>
        <div class="box">
            <h2>${book.braking}</h2>
            <h1>Braking</h1>
        </div>

    </div>
    <div class="container">
        <div class="box">
            <h2>${book.mileage}</h2>
            <h1>Mileage</h1>
        </div>
        <div class="box">
            <h2>${book.speed}</h2>
            <h1>0-100KM/H</h1>
        </div>
        <div class="box">
            <h2>${book.height}</h2>
            <h1>Height</h1>
        </div>

    </div>`;
        dlayout.innerHTML += uiString;
    }

    clear() {
        let bikedetails = document.getElementById('bikedetails');
        bikedetails.reset();
    }

    validate(book) {
        if (book.cname.length < 2 || book.mname.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}
// Add submit event listener to libraryForm
let bikedetails = document.getElementById('bikedetails');
bikedetails.addEventListener('submit', bikedetailsSubmit);

function bikedetailsSubmit(e) {
    console.log('YOu have submitted library form');
    let cname = document.getElementById('cname').value;
    let mname = document.getElementById('mname').value;
    let price = document.getElementById('price').value;
    let engine = document.getElementById('engine').value;
    let power = document.getElementById('power').value;
    let torque = document.getElementById('torque').value;
    let fueltank = document.getElementById('fueltank').value;
    let gearbox = document.getElementById('gearbox').value;
    let braking = document.getElementById('braking').value;
    let mileage = document.getElementById('mileage').value;
    let speed = document.getElementById('speed').value;
    let height = document.getElementById('height').value;
    let compression = document.getElementById('compression').value;
    let clear = document.getElementById('clear').value;
    let system = document.getElementById('system').value;
    let suspension = document.getElementById('suspension').value;
    let transmission = document.getElementById('transmission').value;
    let pic = document.getElementById('pic').value;
    

    let book = new Book(cname, mname, price,engine,power,torque,fueltank,gearbox,braking,mileage,speed,height,compression,clear,system,suspension,transmission,pic);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}