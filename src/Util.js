function gridtemp(cssRepeat, palavra) {
  let mapa = [];

  let tempGrid = new Array(cssRepeat);
  for (let i = 0; i < cssRepeat; i++) {
    tempGrid[i] = new Array(cssRepeat);
    for (let j = 0; j < cssRepeat; j++) {
      tempGrid[i][j] = 0;
    }
  }

  //por as palavras

  let tamanho, x, y, direçao;
  let local = [];
  let wordpose = [];

  for (let j = 0; j < palavra.length; j++) {
    tamanho = palavra[j].length;

    let espasso = false;
    let reverse = false;

    local = [];

    do {
      x = RandomN(cssRepeat);
      y = RandomN(cssRepeat);

      direçao = RandomN(7);

      let k, l;

      switch (direçao) {
        case 0: //cima
          if (tamanho < x) {
            for (k = x; k > x - tamanho; k--) {
              if (tempGrid[k - 1][y] === 0) {
                espasso = true;
              } else {
                espasso = false;
                break;
              }
            }
          }
          break;
        case 1: //baixo
          if (tamanho < x) {
            for (k = x; k > x - tamanho; k--) {
              if (tempGrid[k - 1][y] === 0) {
                espasso = true;
                reverse = true;
              } else {
                reverse = false;
                espasso = false;
                break;
              }
            }
          }
          break;
        case 2: //direita
          if (tamanho < y) {
            for (k = y; k > y - tamanho; k--) {
              if (tempGrid[x][k - 1] === 0) {
                espasso = true;
              } else {
                espasso = false;
                break;
              }
            }
          }
          break;
        case 3: //esquerda
          if (tamanho < y) {
            for (k = y; k > y - tamanho; k--) {
              if (tempGrid[x][k - 1] === 0) {
                espasso = true;
                reverse = true;
              } else {
                reverse = false;
                espasso = false;
                break;
              }
            }
          }
          break;
        case 4: //dig ed
          if (tamanho < x && tamanho < y) {
            for (k = x, l = y; k > x - tamanho && l > y - tamanho; k--, l--) {
              if (tempGrid[k - 1][l - 1] === 0) {
                espasso = true;
              } else {
                espasso = false;
                break;
              }
            }
          }
          break;
        case 5:
          if (tamanho < x && tamanho < y) {
            for (k = x, l = y; k > x - tamanho && l > y - tamanho; k--, l--) {
              if (tempGrid[k - 1][l - 1] === 0) {
                espasso = true;
                reverse = true;
              } else {
                reverse = true;
                espasso = false;
                break;
              }
            }
          }
          break;

        case 6:
          if (tamanho < x && tamanho < cssRepeat - y) {
            for (k = x, l = cssRepeat - y; k > x - tamanho; k--, l++) {
              if (tempGrid[k - 1][l - 1] === 0) {
                espasso = true;
              } else {
                espasso = false;
                break;
              }

              espasso = true;
            }
          }

          break;

        case 7:
          if (tamanho < x && tamanho < cssRepeat - y) {
            for (k = x, l = cssRepeat - y; k > x - tamanho; k--, l++) {
              if (tempGrid[k - 1][l - 1] === 0) {
                espasso = true;
                reverse = true;
              } else {
                reverse = false;
                espasso = false;
                break;
              }

              espasso = true;
            }
          }

          break;

        default:
          break;
      }

      if (espasso == true) {
        if (reverse == true) {
          let letratempo = palavra[j].split("").reverse().join("");

          switch (direçao) {
            case 1:
              for (let i = 0, k = x; k > x - tamanho; k--, i++) {
                tempGrid[k - 1][y] = letratempo[i].toUpperCase();
                local[i] = `${k - 1}-${y}`;
              }
              break;
            case 3:
              for (let i = 0, k = y; k > y - tamanho; k--, i++) {
                tempGrid[x][k - 1] = letratempo[i].toUpperCase();
                local[i] = `${x}-${k - 1}`;
              }
              break;
            case 5:
              for (
                let i = 0, k = x, l = y;
                k > x - tamanho && l > y - tamanho;
                k--, l--, i++
              ) {
                tempGrid[k - 1][l - 1] = letratempo[i].toUpperCase();
                local[i] = `${k - 1}-${l - 1}`;
              }
              break;
            case 7:
              for (
                let i = 0, k = x, l = cssRepeat - y;
                k > x - tamanho;
                k--, l++, i++
              ) {
                tempGrid[k - 1][l - 1] = letratempo[i].toUpperCase();
                local[i] = `${k - 1}-${l - 1}`;
              }
              break;
            default:
              break;
          }
        } else {
          switch (direçao) {
            case 0:
              for (let i = 0, k = x; k > x - tamanho; k--, i++) {
                tempGrid[k - 1][y] = palavra[j][i].toUpperCase();
                local[i] = `${k - 1}-${y}`;
              }
              break;
            case 2:
              for (let i = 0, k = y; k > y - tamanho; k--, i++) {
                tempGrid[x][k - 1] = palavra[j][i].toUpperCase();
                local[i] = `${x}-${k - 1}`;
              }

              break;
            case 4:
              for (
                let i = 0, k = x, l = y;
                k > x - tamanho && l > y - tamanho;
                k--, l--, i++
              ) {
                tempGrid[k - 1][l - 1] = palavra[j][i].toUpperCase();
                local[i] = `${k - 1}-${l - 1}`;
              }

              break;
            case 6:
              for (
                let i = 0, k = x, l = cssRepeat - y;
                k > x - tamanho;
                k--, l++, i++
              ) {
                tempGrid[k - 1][l - 1] = palavra[j][i].toUpperCase();
                local[i] = `${k - 1}-${l - 1}`;
              }
              break;
            default:
              break;
          }
        }
      }
    } while (espasso == false);
    wordpose.push(local);
  }

  //por letras onde n tem
  for (let i = 0; i < cssRepeat; i++) {
    for (let j = 0; j < cssRepeat; j++) {
      if (tempGrid[i][j] === 0) {
        tempGrid[i][j] = randomChar();
      }
    }
  }

  //passar de bi para uni
  let k = 0;
  for (let i = 0; i < cssRepeat; i++) {
    for (let j = 0; j < cssRepeat; j++, k++) {
      mapa[k] = {
        nome: tempGrid[i][j],
        pos: `${i}-${j}`,
        clicked: false,
      };
    }
  }

  return { mapa, wordpose };
}

function RandomN(max) {
  return Math.floor(Math.random() * max);
}

function randomChar() {
  let char = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  char = characters.charAt(Math.floor(Math.random() * characters.length));
  return char.toUpperCase();
}

export default gridtemp;
