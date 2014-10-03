function SpecialsCtrl($scope,data){
this.test = 'Specials';
this.specials = data.data.specials;
}
app.controller('SpecialsCtrl',SpecialsCtrl);