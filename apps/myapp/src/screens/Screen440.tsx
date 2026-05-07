import { Pressable, Text, View } from 'react-native';

import { copy440 } from '../generated/copy/copy440';
import { layout440 } from '../generated/layouts/layout440';
import { palette440 } from '../generated/palettes/palette440';

export function Screen440() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout440.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy440.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy440.detail} / {palette440.name}
			</Text>
		</View>
	);
}
