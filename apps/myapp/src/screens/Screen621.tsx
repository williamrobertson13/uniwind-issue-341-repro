import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy621 } from '../generated/copy/copy621';
import { layout621 } from '../generated/layouts/layout621';
import { palette621 } from '../generated/palettes/palette621';

const RuntimeView621 = withUniwind(View);

export function Screen621() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView621 styleClassName={layout621.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy621.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy621.detail} / {palette621.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
