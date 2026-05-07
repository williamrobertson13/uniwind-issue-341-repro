import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy327 } from '../generated/copy/copy327';
import { layout327 } from '../generated/layouts/layout327';
import { palette327 } from '../generated/palettes/palette327';

const RuntimeView327 = withUniwind(View);

export function Screen327() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView327 styleClassName={layout327.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy327.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy327.detail} / {palette327.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
