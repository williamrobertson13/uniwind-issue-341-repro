import { Pressable, Text, View } from 'react-native';

import { copy448 } from '../generated/copy/copy448';
import { layout448 } from '../generated/layouts/layout448';
import { palette448 } from '../generated/palettes/palette448';

export function Screen448() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout448.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy448.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy448.detail} / {palette448.name}
			</Text>
		</View>
	);
}
