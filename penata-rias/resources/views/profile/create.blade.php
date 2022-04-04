@extends('adminlte::page')

@section('title', 'Profile')

@section('content_header')
    {{-- <section class="content-header">
    </section> --}}
@stop

@section('content')

<section class="content p-3">
    <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Buat @yield('title')</h3>
        </div>
        <div class="card-body">
            <form action="/profile" method="POST" enctype="multipart/form-data" >
                @csrf
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="name">Nama MUA</label>
                            <input name="name" class="form-control" value="{{old('name')}}"
                            >
                            <div class="text-danger">
                                @error('name')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input name="email" class="form-control" value="{{old('email')}}">
                            <div class="text-danger">
                                @error('email')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" class="form-control" value="{{old('password')}}">
                            <div class="text-danger">
                                @error('password')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="nama_pemilik">Nama Pemilik</label>
                            <input name="nama_pemilik" class="form-control" value="{{old('nama_pemilik')}}">
                            <div class="text-danger">
                                @error('nama_pemilik')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="alamat">Alamat</label>
                            <input name="alamat" class="form-control" value="{{old('alamat')}}">
                            <div class="text-danger">
                                @error('alamat')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="tempat_kerja">Tempat Kerja</label>
                            <input name="tempat_kerja" class="form-control" value="{{old('tempat_kerja')}}">
                            <div class="text-danger">
                                @error('tempat_kerja')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="whatsapp">No Whatsapp</label>
                            <input name="whatsapp" class="form-control" value="{{old('whatsapp')}}">
                            <div class="text-danger">
                                @error('whatsapp')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="sosial_media">Sosial Media</label>
                            <input type="text" name="sosial_media" class="form-control" value="{{old('sosial_media')}}">
                            <div class="text-danger">
                                @error('sosial_media')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="status">Status</label>
                            <input name="status" class="form-control" value="{{old('status')}}">
                            <div class="text-danger">
                                @error('status')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">                         
                            <label for="profil_bio">Profil Bio</label>
                            <textarea name="profil_bio" class="form-control" rows="3" placeholder="Enter ..." value="{{old('profil_bio')}}"></textarea>
                            <div class="text-danger">
                                @error('profil_bio')
                                {{$message}}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-group">
                                <label for="foto_profil" class="form-label">Gambar Profil</label>
                                <img class="img-preview img-fluid mb-3 col-sm-5">
                                <div class="img-preview custom-file img-fluid">
                                  <input type="file" class="custom-file-input form-control" id="foto_profil" name="foto_profil" onchange="previewImage()">
                                  <label class="custom-file-label" for="foto_profil">Pilih Gambar</label>
                                </div>
                                <div class="text-danger">
                                    @error('foto_profil')
                                    {{$message}}
                                    @enderror
                                </div>
                            </div> 
                            </div>
                        </div>
                    </div>
                <div class="box-footer">
                <button type="submit" class="btn btn-primary float-right">Simpan</button>
                </div>
            </form>        
        </div>
    </div>
</section>

@stop


<script>
    function previewImage(){
        const image = document.querySelector('#foto_profil');
        const imgPreview = document.querySelector('.img-preview');

        imgPreview.style.display = 'block';

        const oFReader = new FileReader();
        oFReader.readAsDataURL(image.files[0]);

        oFReader.onload = function(oFREvent){
            imgPreview.src = oFREvent.target.result;
        }
    }
</script>


@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop


@section('js')
    <script> console.log('Hi!'); </script>
    @section('plugins.Datatables', true)

@stop