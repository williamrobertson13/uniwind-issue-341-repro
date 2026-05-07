import { Pressable, Text, View } from 'react-native';

import { copy935 } from '../generated/copy/copy935';
import { layout935 } from '../generated/layouts/layout935';
import { palette935 } from '../generated/palettes/palette935';

export function Screen935() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout935.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy935.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy935.detail} / {palette935.name}
			</Text>
		</View>
	);
}
