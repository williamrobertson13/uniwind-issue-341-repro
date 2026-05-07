import { Pressable, Text, View } from 'react-native';

import { copy288 } from '../generated/copy/copy288';
import { layout288 } from '../generated/layouts/layout288';
import { palette288 } from '../generated/palettes/palette288';

export function Screen288() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout288.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy288.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy288.detail} / {palette288.name}
			</Text>
		</View>
	);
}
