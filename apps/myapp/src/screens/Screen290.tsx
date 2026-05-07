import { Pressable, Text, View } from 'react-native';

import { copy290 } from '../generated/copy/copy290';
import { layout290 } from '../generated/layouts/layout290';
import { palette290 } from '../generated/palettes/palette290';

export function Screen290() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout290.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy290.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy290.detail} / {palette290.name}
			</Text>
		</View>
	);
}
