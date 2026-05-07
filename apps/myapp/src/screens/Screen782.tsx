import { Pressable, Text, View } from 'react-native';

import { copy782 } from '../generated/copy/copy782';
import { layout782 } from '../generated/layouts/layout782';
import { palette782 } from '../generated/palettes/palette782';

export function Screen782() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout782.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy782.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy782.detail} / {palette782.name}
			</Text>
		</View>
	);
}
