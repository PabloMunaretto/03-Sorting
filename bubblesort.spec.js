describe('Bubble Sort', function(){
  it('llama a swap hasta que el array este ordenado', function(){
      spyOn(window, 'swap').and.callThrough(); 
      bubbleSort([1,2,3,5,4])
      expect(window.swap.calls.count()).toEqual(1);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('orders a filled array', function(){
      expect( bubbleSort([8,6,1,2,4,2,9,11]) ).toEqual( [1,2,2,4,6,8,9,11] );
  });
  
});

describe('Swap', function(){
  var arr = [1, 2, 3, 7, 5];

  it('Toma un arreglo y un indice, y cambia el indice por el siguiente', function(){
      swap(arr, 3);
      expect(arr).toEqual([1, 2, 3, 5, 7]);
  });
});

describe('inOrder', function(){
  it('debe chequear con un TRUE que el array quede ordenado', function(){
      expect(inOrder([1,3,5,7,9], 3)).toEqual(true);
  });
  it('debe retornar FALSE si el array no está ordenado', function(){
    expect(inOrder([3,2,1,5,3], 3)).toEqual(false);
});
})
