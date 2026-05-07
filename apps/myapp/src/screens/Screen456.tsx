import { Pressable, Text, View } from 'react-native';

import { copy456 } from '../generated/copy/copy456';
import { layout456 } from '../generated/layouts/layout456';
import { palette456 } from '../generated/palettes/palette456';

export function Screen456() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout456.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy456.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy456.detail} / {palette456.name}
			</Text>
		</View>
	);
}
