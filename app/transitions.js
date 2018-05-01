export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('game'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('game'),
    this.toRoute('gift'),
    this.use('scrollThen', 'scale')
  );
  
}
