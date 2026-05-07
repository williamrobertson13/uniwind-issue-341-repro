import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy666 } from '../generated/copy/copy666';
import { layout666 } from '../generated/layouts/layout666';
import { palette666 } from '../generated/palettes/palette666';

const RuntimeView666 = withUniwind(View);

export function Screen666() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView666 styleClassName={layout666.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy666.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy666.detail} / {palette666.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
