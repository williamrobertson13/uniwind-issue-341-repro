import { Pressable, Text, View } from 'react-native';

import { copy320 } from '../generated/copy/copy320';
import { layout320 } from '../generated/layouts/layout320';
import { palette320 } from '../generated/palettes/palette320';

export function Screen320() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout320.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy320.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy320.detail} / {palette320.name}
			</Text>
		</View>
	);
}
