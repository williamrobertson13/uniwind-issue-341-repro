import { Pressable, Text, View } from 'react-native';

import { copy232 } from '../generated/copy/copy232';
import { layout232 } from '../generated/layouts/layout232';
import { palette232 } from '../generated/palettes/palette232';

export function Screen232() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout232.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy232.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy232.detail} / {palette232.name}
			</Text>
		</View>
	);
}
