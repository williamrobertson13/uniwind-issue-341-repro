import { Pressable, Text, View } from 'react-native';

import { copy834 } from '../generated/copy/copy834';
import { layout834 } from '../generated/layouts/layout834';
import { palette834 } from '../generated/palettes/palette834';

export function Screen834() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout834.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy834.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy834.detail} / {palette834.name}
			</Text>
		</View>
	);
}
