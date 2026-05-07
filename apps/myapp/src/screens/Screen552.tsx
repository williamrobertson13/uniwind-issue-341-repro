import { Pressable, Text, View } from 'react-native';

import { copy552 } from '../generated/copy/copy552';
import { layout552 } from '../generated/layouts/layout552';
import { palette552 } from '../generated/palettes/palette552';

export function Screen552() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout552.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy552.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy552.detail} / {palette552.name}
			</Text>
		</View>
	);
}
