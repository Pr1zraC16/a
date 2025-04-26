function toggleVehicleInfo(vehicle) {
    const impalaDescription = document.getElementById('impala-description');
    const camaroDescription = document.getElementById('camaro-description');

    if (vehicle === 'impala') {
        if (!impalaDescription.classList.contains('hidden')) {
            impalaDescription.classList.add('hidden');
        } else {
            camaroDescription.classList.add('hidden');
            impalaDescription.classList.remove('hidden');
        }
    } else if (vehicle === 'camaro') {
        if (!camaroDescription.classList.contains('hidden')) {
            camaroDescription.classList.add('hidden');
        } else {
            impalaDescription.classList.add('hidden');
            camaroDescription.classList.remove('hidden');
        }
    }
}
