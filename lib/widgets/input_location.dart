import 'package:flutter/material.dart';
import 'package:location/location.dart' as loc;
import 'package:geocoding/geocoding.dart';
import 'package:places/models/place.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlng/latlng.dart';

class InputLocation extends StatefulWidget {
  const InputLocation({super.key});

  @override
  State<StatefulWidget> createState() {
    return _InputLocationState();
  }
}

class _InputLocationState extends State<InputLocation> {
  PlaceLocation? _pickedLocation;
  var _isLoading = false;
  Future<String> getAddressFromLatLng(double latitude, double longitude) async {
    try {
      List<Placemark> placemarks =
          await placemarkFromCoordinates(latitude, longitude);
      Placemark place = placemarks[0];

      String address =
          "${place.name}, ${place.locality}, ${place.postalCode}, ${place.country}";
      print(address);
      return address;
    } catch (e) {
      return "Error: ${e.toString()}";
    }
  }

  void _getCurrentLocation() async {
    loc.Location location = loc.Location();

    bool serviceEnabled;
    loc.PermissionStatus permissionGranted;
    loc.LocationData locationData;

    serviceEnabled = await location.serviceEnabled();
    if (!serviceEnabled) {
      serviceEnabled = await location.requestService();
      if (!serviceEnabled) {
        return;
      }
    }

    permissionGranted = await location.hasPermission();
    if (permissionGranted == loc.PermissionStatus.denied) {
      permissionGranted = await location.requestPermission();
      if (permissionGranted != loc.PermissionStatus.granted) {
        return;
      }
    }
    setState(() {
      _isLoading = true;
    });
    locationData = await location.getLocation();
    final double lat = locationData.latitude!;
    final double lng = locationData.longitude!;
    if(lat==null || lng == null){
      return;
    }
    final address = await getAddressFromLatLng(lat, lng);
    print(address);

    setState(() {
      _pickedLocation = PlaceLocation(
        latitude: lat,
        longitude: lng,
        address: address,
      );
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget previewContent = Text(
      'No Location chosen',
      textAlign: TextAlign.center,
      style: Theme.of(context)
          .textTheme
          .titleMedium!
          .copyWith(color: Theme.of(context).colorScheme.onBackground),
    );
    if (_pickedLocation != null && _pickedLocation!.latitude != null && _pickedLocation!.longitude != null) {
      previewContent = FlutterMap(
        options: MapOptions(
          center: LatLng(_pickedLocation!.latitude!, _pickedLocation!.longitude!),
          zoom: 13.0,
        ),
        layers: [
          TileLayerOptions(
            urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            subdomains: ['a', 'b', 'c'],
          ),
          MarkerLayerOptions(
            markers: [
              Marker(
                width: 80.0,
                height: 80.0,
                point: LatLng(_pickedLocation!.latitude!, _pickedLocation!.longitude!),
                builder: (ctx) => Container(
                  child: Icon(
                    Icons.location_on,
                    color: Theme.of(context).colorScheme.primary,
                    size: 45,
                  ),
                ),
              ),
            ],
          ),
        ],
      );
    }
    if (_isLoading) {
      previewContent = const CircularProgressIndicator();
    }
    return Column(
      children: [
        Container(
          height: 170,
          width: double.infinity,
          decoration: BoxDecoration(
            border: Border.all(
              width: 1,
              color: Theme.of(context).colorScheme.primary.withOpacity(0.2),
            ),
          ),
          alignment: Alignment.center,
          child: previewContent,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            TextButton.icon(
              onPressed: _getCurrentLocation,
              icon: const Icon(Icons.location_on),
              label: const Text('Get Current Location'),
            ),
            TextButton.icon(
              onPressed: () {},
              icon: const Icon(Icons.map),
              label: const Text('Select on Map'),
            ),
          ],
        )
      ],
    );
  }
}
