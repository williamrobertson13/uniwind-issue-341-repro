import { Pressable, Text, View } from 'react-native';

import { copy624 } from '../generated/copy/copy624';
import { layout624 } from '../generated/layouts/layout624';
import { palette624 } from '../generated/palettes/palette624';

export function Screen624() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout624.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy624.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy624.detail} / {palette624.name}
			</Text>
		</View>
	);
}
