import { Pressable, Text, View } from 'react-native';

import { copy869 } from '../generated/copy/copy869';
import { layout869 } from '../generated/layouts/layout869';
import { palette869 } from '../generated/palettes/palette869';

export function Screen869() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout869.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy869.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy869.detail} / {palette869.name}
			</Text>
		</View>
	);
}
