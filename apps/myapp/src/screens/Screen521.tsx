import { Pressable, Text, View } from 'react-native';

import { copy521 } from '../generated/copy/copy521';
import { layout521 } from '../generated/layouts/layout521';
import { palette521 } from '../generated/palettes/palette521';

export function Screen521() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout521.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy521.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy521.detail} / {palette521.name}
			</Text>
		</View>
	);
}
