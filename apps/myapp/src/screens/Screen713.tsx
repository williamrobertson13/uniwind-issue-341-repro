import { Pressable, Text, View } from 'react-native';

import { copy713 } from '../generated/copy/copy713';
import { layout713 } from '../generated/layouts/layout713';
import { palette713 } from '../generated/palettes/palette713';

export function Screen713() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout713.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy713.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy713.detail} / {palette713.name}
			</Text>
		</View>
	);
}
