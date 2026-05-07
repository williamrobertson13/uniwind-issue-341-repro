import { Pressable, Text, View } from 'react-native';

import { copy656 } from '../generated/copy/copy656';
import { layout656 } from '../generated/layouts/layout656';
import { palette656 } from '../generated/palettes/palette656';

export function Screen656() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout656.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy656.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy656.detail} / {palette656.name}
			</Text>
		</View>
	);
}
