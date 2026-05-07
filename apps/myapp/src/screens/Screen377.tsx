import { Pressable, Text, View } from 'react-native';

import { copy377 } from '../generated/copy/copy377';
import { layout377 } from '../generated/layouts/layout377';
import { palette377 } from '../generated/palettes/palette377';

export function Screen377() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout377.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy377.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy377.detail} / {palette377.name}
			</Text>
		</View>
	);
}
