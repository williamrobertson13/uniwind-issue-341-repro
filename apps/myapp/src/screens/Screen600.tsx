import { Pressable, Text, View } from 'react-native';

import { copy600 } from '../generated/copy/copy600';
import { layout600 } from '../generated/layouts/layout600';
import { palette600 } from '../generated/palettes/palette600';

export function Screen600() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout600.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy600.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy600.detail} / {palette600.name}
			</Text>
		</View>
	);
}
