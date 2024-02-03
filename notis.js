function toggle(divId) {
    
    document.getElementById('biografia').style.display = 'none';
    document.getElementById('photo').style.display = 'none';
    document.getElementById('disko').style.display = 'none';
    document.getElementById('synde').style.display = 'none';
    document.getElementById('diax').style.display = 'none';
    document.getElementById('b1').style.display = 'none';
    document.getElementById('b2').style.display = 'none';
    document.getElementById('b3').style.display = 'none';
    document.getElementById('p1').style.display = 'none';
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p3').style.display = 'none';
    document.getElementById('s1').style.display = 'none';

   
    document.getElementById(divId).style.display = 'block';
}