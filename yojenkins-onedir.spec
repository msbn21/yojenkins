# -*- mode: python ; coding: utf-8 -*-


block_cipher = None


a = Analysis(['yojenkins\\__main__.py'],
             pathex=[],
             binaries=[],
             datas=[],
             hiddenimports=['site'],
             hookspath=[],
             hooksconfig={},
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher,
             noarchive=False)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)

a.datas += Tree('./yojenkins/resources', prefix='resources/')
a.datas += Tree('./yojenkins/yo_jenkins/groovy_scripts', prefix='yo_jenkins/groovy_scripts/')

exe = EXE(pyz,
          a.scripts,
          [],
          exclude_binaries=True,
          name='yojenkins',
          debug=False,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          console=True,
          disable_windowed_traceback=False,
          target_arch=None,
          codesign_identity=None,
          entitlements_file=None )

coll = COLLECT(exe,
               a.binaries,
               a.zipfiles,
               a.datas,
               strip=False,
               upx=True,
               upx_exclude=[],
               name='yojenkins')
