import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy246 } from '../generated/copy/copy246';
import { layout246 } from '../generated/layouts/layout246';
import { palette246 } from '../generated/palettes/palette246';

const RuntimeView246 = withUniwind(View);

export function Screen246() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView246 styleClassName={layout246.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy246.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy246.detail} / {palette246.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
