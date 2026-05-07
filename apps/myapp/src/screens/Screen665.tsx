import { Pressable, Text, View } from 'react-native';

import { copy665 } from '../generated/copy/copy665';
import { layout665 } from '../generated/layouts/layout665';
import { palette665 } from '../generated/palettes/palette665';

export function Screen665() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout665.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy665.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy665.detail} / {palette665.name}
			</Text>
		</View>
	);
}
