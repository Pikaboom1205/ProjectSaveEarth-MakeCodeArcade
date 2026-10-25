// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "GAME_MAP":
            case "level2":return tiles.createTilemap(hex`0a0008000300000000000000020303000001000000010003030200000000050000030300000001000000000303050000000000020003030000000000000001030300000000000000000304040404040404040404`, img`
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile7], TileScale.Sixteen);
            case "GAME_INTRO_unused":
            case "level1":return tiles.createTilemap(hex`30001000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020102020201020202010202020102020201020202010202020101010101010101010101010101010101010101010201020102010201020102010102010102010101020101010102010102010101010101010101010101010101010101010202020102020201020102010102010102020201020101010102010101010101010101010101010101010101010101010201010102020101020102010102010102010101020101010102010102010101010101010101010101010101010101010201010102010201020202010202010102020201020202010102010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020202010202020102010201020202010102020201020202010202020102020201020102010101010101010101010101020101010201020102010201020101010102010101020102010201020101020101020102010101010101010101010101020202010202020102010201020202010102020201020202010202020101020101020202010101010101010101010101010102010201020102010201020101010102010101020102010202010101020101020102010101010101010101010101020202010201020101020101020202010102020201020102010201020101020101020102010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "Project_Save Earth_LevelFinalised":
            case "level3":return tiles.createTilemap(hex`0a0008000000000000000300000000020000010000010000000001000000000000000001000300000100020000000000010000030000000200000000000001000000000000000000000005040404040505050404`, img`
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile7,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "myTile4":
            case "tile7":return tile7;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile6":
            case "tile9":return tile9;
            case "myTile7":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
