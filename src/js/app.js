export default function getHealth(data) {
   if (data.health > 50) {
    return 'healthy';
   } else if (data.health >= 15) {
    return 'wounded';
   } else {
    return 'critical';
   }
}



