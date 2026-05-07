import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy967 } from '../generated/copy/copy967';
import { layout967 } from '../generated/layouts/layout967';
import { palette967 } from '../generated/palettes/palette967';

const RuntimeView967 = withUniwind(View);

export function Screen967() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView967 styleClassName={layout967.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy967.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy967.detail} / {palette967.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
