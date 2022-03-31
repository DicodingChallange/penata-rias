@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
    <section class="content">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-aqua">
                <div class="inner">
                    <h3>96</h3>

                    <p>Santri</p>
                </div>
                <div class="icon">
                    <i class="fas fa-fw fa-user-graduate"></i>
                </div>
                <a href="/santri" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-green">
                <div class="inner">
                    <h3>4</h3>
                    <p>Kelas</p>
                </div>
                <div class="icon">
                    <i class="ion fas fa-fw fa-th"></i>
                </div>
                <a href="/kelas" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-yellow">
                <div class="inner">
                    <h3>5</h3>
                    <p>Guru</p>
                </div>
            <div class="icon">
                <i class="fas fa-fw fa-users"></i>
            </div>
                <a href="/guru" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-red">
                <div class="inner">
                    <h3>8</h3>
                    <p>Pelajaran</p>
                </div>
            <div class="icon">
                <i class="fas fa-fw fa-copy"></i>
            </div>
            <a href="/pelajaran" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        </div>
        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
        <!-- Left col -->
        <!-- right col -->
        </div>
        <!-- /.row (main row) -->

        <div class="row m-4">
            <div class="col-lg">
                <div  class="text-center"> 
                {{-- <img src="{{asset('img/madrasah.png')}}" class="img-fluid" alt="Madrasah" style="height:320px;"> --}}
                </div>
            </div>
        </div>
    </section>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop