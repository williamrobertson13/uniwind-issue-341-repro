import { Pressable, Text, View } from 'react-native';

import { copy88 } from '../generated/copy/copy88';
import { layout88 } from '../generated/layouts/layout88';
import { palette88 } from '../generated/palettes/palette88';

export function Screen88() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout88.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy88.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy88.detail} / {palette88.name}
			</Text>
		</View>
	);
}
