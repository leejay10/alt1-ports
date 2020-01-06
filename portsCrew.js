///<reference path="/alt1lib.js">
///<reference path="/runeappslib.js">
///<reference path="/imagedetect.js">
///<reference path="/apps/alt1/alt1doc.js">
"use strict";



ImageData.fromBase64(i=> PortsCrewReader.topRight = i, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAIAAAACtmMCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUI2RUQ0RUM4NDkzMTFFN0E1RkFGNDM2QjU1Nzg2MTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUI2RUQ0RUQ4NDkzMTFFN0E1RkFGNDM2QjU1Nzg2MTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjZFRDRFQTg0OTMxMUU3QTVGQUY0MzZCNTU3ODYxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjZFRDRFQjg0OTMxMUU3QTVGQUY0MzZCNTU3ODYxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtCwcaQAAAOsSURBVHjarFbNT1RXFL/n3vfmUZyxIeJAWNjGOBaaSIgW+AOksCgkDYuGBSEhaRfGBeliXHVBYpqmRk0kRu3CxEAaFl1YIYrprl2gIrSodeKoxS8+wowgM74J7+ve67nvDfgKiYWxJ2/enHPvvN/9/c4979yBzt6jJGRSEvC/dWE3Hqitr68/9/Nlpmlka8Y9rv35+2/oAdOI5Ogk9n588NBn8aq4ztjAwEBPT8/fE38s5F4Ls+ByV3iCalQ3DNcV+GO9rMwTkghPepwIF8dp2QeQTCbDiywtLd2Znl61rEwmg2E8Hj918uSRb5OL8wuIqLBsW2EZhge6dGzQmBQMNEBfOLax80OorKx8t5CP9uzp6OhA+SNj10dGx0yhi9VcMAURQ6NAuKOWoboOBFfdiBiJRNZ9x3HCU7W1td3d3b9cGb05nRKuYupaluLoWAFlbuYxJ1BTU/Nujhtwu7q6UunHDx6mNS2ysJiVa+OYU7zb+dx/I27G7evrsywrl8s1Nzf/cHrg4aN/dL8+XEl0nW4VcTNZDKPR6LFk8sczZ1fMVb92HKwBSrZsEd/CoWmaQ0NDJ473Y6jKyBOYVhaLxch2jDHGOV/3s9lseXk5514m+5IL2f7lV9tGDIDWcdFJp9NHvvn69u1Jh9DlV0uUvLdhQoeHh7/v/w4r3vN4KRyLr/CadnSWl5e557ken5+dpSXzCodYRvOZl09fzFJK/gfVVVVVba2td1MPuMDWRbUNq5VAtq2t7fzFSxy7IGMgpfaecNhB0o8eP5ubB0SkBABKUR3UOcKh3pbDh6f+uiM9bJ2OdB3huaVw7O3txXvBNKurqy9eGlxZyRf7P+EAXNuWRnyROzs7x8dv3JqcMgwjbxYIUMqYlHL9SNkqYkVFBaasoaHh6rWxickpTJiNWwrYcwSCAmX+3b8SiUT4yUKhEN599LHWmpqa8P1FoLv3UoQG2YfghAMigVHkiVgYCdzrlpbPw4jR6I7U/fu5fH5mZgZbS2Lfvt3x+NkLP70urCIQHgNIC/xdVYigSAYE8VLahQBgevhsje/eVVf3aWxnrKmxcXBwEGtt9NrY3MIiKBaMIBGpjASJUzRxmAFjVGPoS4WoRYJ9Kn4EV6IAPtmf6Gj/4vKvV548n4VAKRRZgSQ+T8WL+Csp4YwFnIBqxluKOMB5sUiBYOOzbFslW2kEWCMVRBJbrMJla08D1SNqQmkhwfkDxQoImU/pbfSvPx9CbKgHUDThjQADAIAgtJU3iQ4nAAAAAElFTkSuQmCC");
ImageData.fromBase64(i=> PortsCrewReader.findStartTextTitle = i, "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVBNDMwQjU4QUQ5MTFFN0E3RUM5ODA0QzYzNjVCRkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVBNDMwQjY4QUQ5MTFFN0E3RUM5ODA0QzYzNjVCRkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNUE0MzBCMzhBRDkxMUU3QTdFQzk4MDRDNjM2NUJGQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNUE0MzBCNDhBRDkxMUU3QTdFQzk4MDRDNjM2NUJGQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PohZGZcAAAAPSURBVHjaYvj55ipAgAEABZwCu7VyROAAAAAASUVORK5CYII=");
ImageData.fromBase64(i=> PortsCrewReader.findStartText = i, "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTI3NDREMEM4QURCMTFFN0FGMTNEM0U5MThDMUQ2MDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTI3NDREMEQ4QURCMTFFN0FGMTNEM0U5MThDMUQ2MDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMjc0NEQwQThBREIxMUU3QUYxM0QzRTkxOEMxRDYwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMjc0NEQwQjhBREIxMUU3QUYxM0QzRTkxOEMxRDYwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsWS11AAAAAPSURBVHjaYvr//z9AgAEABgYDACuJdK0AAAAASUVORK5CYII=");
PortsCrewReader.itemnumbers = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAIAQMAAABzrGucAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMjlEOUE2QUNFOEFFNzExOEQxQzk3MDE4RjNDRjM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNDY1MDQ3NjhGNUMxMUU3QTA4M0VFQ0E5QTUzODkyQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNDY1MDQ3NThGNUMxMUU3QTA4M0VFQ0E5QTUzODkyQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhDREFERjM3RkM4Q0U3MTE4RDFDOTcwMThGM0NGMzdCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyOUQ5QTZBQ0U4QUU3MTE4RDFDOTcwMThGM0NGMzdCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EBXL4gAAAAZQTFRF////////VXz1bAAAAAF0Uk5TAEDm2GYAAABNSURBVAjXY1Bo53F82C9jwRDYMcmRyVHJhaGjocmRhQnEaOQJPNoko8LQ0cQUoOaiJMPQ0cJUoeKixMIQ0CEkqOIBZCie7xE43CHDAgDCtBLOoMrQMAAAAABJRU5ErkJggg==", 
[0, 7, 12, 19, 25, 31, 37, 44, 50, 57]);
PortsCrewReader.defaultcolors = [
	a1lib.mixcolor(255, 255, 255), //White
	a1lib.mixcolor(0, 0, 0),       //Black
	a1lib.mixcolor(249, 236, 213)	 //Port Title
];
function PortsCrewReader() {
	this.pos = null;
	this.img = null;
	this.debug = true;
	this.overlaplines = [];
	this.readargs = { backwards: true, colors: PortsCrewReader.defaultcolors };

	this.find = function () {
		var img = a1lib.bindfullrs();
		if (!img) { return false; }
		var pos = a1lib.findsubimg(img, PortsCrewReader.topRight);
		if (pos.length == 0) { return; }
		var buf = img.toData(pos[0].x, pos[0].y, 331, 126);
		var foundy = 0;
		this.img = buf;
		this.pos = { x: pos[0].x - 129, y: pos[0].y + 64};
		qw(this.pos);
		return true;
	}	
	this.read = function(img, area, col, font, needle = null, tollerance) {
		try {
			$('body').html(img.toImage());
		} catch(e) {
		}
		if(!img.x) img.x = 0;
		if(!img.y) img.y = 0;
		col = a1lib.mixcolor(col[0],col[1],col[2]);
		var posex = {x:0, y:0};
		if(needle) {
			var find = this.findsubbuffer(img.toData(img.x + area.x - 10, img.y + area.y - 15, area.w, area.h), needle, 0, 0, area.w, area.h, 50);
			if(find.length > 0) {
				posex = {x:find[0].x-tollerance.x, y:find[0].y-tollerance.y}
				alt1.overLayRect(a1lib.mixcolor(255, 0, 0), img.x + area.x - 10 + find[0].x, img.y + area.y - 15 + find[0].y, 1, 1, 10000, 1);
			}
		}
		var str = alt1.bindReadColorString(img.handle, font, col, area.x + posex.x, area.y + posex.y);
		if(this.debug) {
			try {
				alt1.overLayRect(a1lib.mixcolor(255, 255, 255), img.x + area.x + posex.x - 10 , img.y + area.y + posex.y -15, area.w, area.h, 10000, 1);
				//alt1.overLayRect(a1lib.mixcolor(255, 0, 255), img.x + area.x + posex.x, img.y + area.y + posex.y, area.w, area.h, 10000, 1);
				alt1.overLayTextEx(str, a1lib.mixcolor(255, 255, 255), area.h, img.x + area.x + posex.x, img.y + area.y + posex.y, 10000, "", false, true);
			} catch(err) {
				alt1.overLayRect(a1lib.mixcolor(255, 255, 255), img.x + area.x + posex.x - 10 , img.y + area.y + posex.y -15, area.w, area.h, 10000, 1);
				alt1.overLayTextEx("null", a1lib.mixcolor(255, 255, 255), 10, img.x + area.x + posex.x -10 + area.w / 2 | 0, img.y + area.y + posex.y - area.h, 10000, "", true, false);
			}
		}
		return str;
		
	}
	this.readAmount = function (buffer, pos, col) {
		var img = buffer.toData(buffer.x + pos.x, buffer.y + pos.y, pos.w, pos.h);
		//alt1.overLayImage(buffer.x, buffer.y, TestIMG, pos.w, 10000);
		//qw(a1lib.alt1imgencode(buffer.toData(buffer.x + pos.x, buffer.y + pos.y,pos.w,pos.h),0,0,pos.w, pos.h));
		//var img = a1lib.alt1imgdecode(TestIMG, false, 0, 0, pos.w, pos.h);
		//qw(img, buf, img.width);
		var str = "";
		var dx = 0;
		var anymatch = true;
		while (anymatch && dx < pos.w) {
			anymatch = false;
			for (var a = 0; a < PortsCrewReader.itemnumbers.buffers.length; a++) {
				var match = true;
				var buf = PortsCrewReader.itemnumbers.buffers[a];
				//qw("");
				//qw(a);
				var imgX = buffer.x + pos.x + dx;
				var imgY = buffer.y + pos.y;
				if(dx + buf.width > pos.w) {
					anymatch = false;
					break;
				}
				//var img = buffer.toData(imgX, imgY, buf.width, buf.height);
				var count = 0;
				var count2 = 0;
				for (var x = 0; x < buf.width; x++) {
					for (var y = 0; y < buf.height; y++) {
						var bufId = (4 * x) + (4 * buf.width * y);
						var imgId = (4 * (dx + x)) + (4 * img.width * y);
						if(buf.data[bufId] != 255) { continue; }
						count2++;
						if(img.data[imgId] == col[0] && img.data[imgId+1] == col[1] && img.data[imgId+2] == col[2]) {
							count++;
							//qw("x", x, "y", y, "buf:", buf.data[bufId], buf.data[bufId+1], buf.data[bufId+2], "img:", img.data[imgId], img.data[imgId+1], img.data[imgId+2]);
							//alt1.overLayRect(a1lib.mixcolor(buf.data[bufId], buf.data[bufId+1], buf.data[bufId+2]), buffer.x + x + dx + pos.x, buffer.y + 26 + y + pos.y, 1, 1, 10000, 1);
							//alt1.overLayRect(a1lib.mixcolor(img.data[imgId], img.data[imgId+1], img.data[imgId+2]), buffer.x + x + dx + pos.x, buffer.y + 46 + y + pos.y, 1, 1, 10000, 1);
							continue;
						}
						match = false;
						break;						
					}
					if (!match) { break; }
				}
				//qw("c", count, "c2",count2);
				if(count == count2) {
					anymatch = true;
					dx += buf.width;
					str += "0123456789"[a];
					break;
				}
			}
			if(!anymatch) {
				dx++;
				//qw("here", dx);
				anymatch = true;
			}
		}
		if(str != "" && this.debug) {
			try {
				alt1.overLayRect(a1lib.mixcolor(255, 255, 255), buffer.x + pos.x, buffer.y + pos.y, pos.w, pos.h, 10000, 1);
				alt1.overLayTextEx(str, a1lib.mixcolor(255, 255, 255), pos.h, buffer.x + pos.x + pos.w / 2 | 0, buffer.y + pos.y + pos.h + 2, 10000, "", false, true);
			} catch(err) {
				alt1.overLayRect(a1lib.mixcolor(255, 255, 255), buffer.x + pos.x, buffer.y + pos.y, pos.w, pos.h, 10000, 1);
				alt1.overLayTextEx(err, a1lib.mixcolor(255, 255, 255), pos.h, buffer.x + pos.x + pos.w / 2 | 0, buffer.y + pos.y + pos.h + 2, 10000, "", true, false);
			}
		}
		return str;
	}
	
	this.findsubbuffer = function (haystack, needle, sx, sy, sw, sh, maxresults = 50, maxdif = 30) {
		if (sx == null) { sx = 0; }
		if (sy == null) { sy = 0; }
		if (sw == null) { sw = haystack.width; }
		if (sh == null) { sh = haystack.height; }
	
		var r = [];
		var needlestride = needle.width * 4;
		var heystackstride = haystack.width * 4;
		var cw = (sx + sw) - needle.width;
		var ch = (sy + sh) - needle.height;
		for (var x = sx; x <= cw; x++) {
			for (var y = sy; y <= ch; y++) {
				if (a1lib.simplecompare(haystack, needle, x, y, maxdif)!==false) {
					r.push({ x: x, y: y });
					if (r.length > maxresults) { return r; }
				}
			}
		}
		return r;
	}
}