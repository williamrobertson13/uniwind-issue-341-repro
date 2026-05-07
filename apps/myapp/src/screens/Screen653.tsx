import { Pressable, Text, View } from 'react-native';

import { copy653 } from '../generated/copy/copy653';
import { layout653 } from '../generated/layouts/layout653';
import { palette653 } from '../generated/palettes/palette653';

export function Screen653() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout653.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy653.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy653.detail} / {palette653.name}
			</Text>
		</View>
	);
}
