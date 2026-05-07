import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy658 } from '../generated/copy/copy658';
import { layout658 } from '../generated/layouts/layout658';
import { palette658 } from '../generated/palettes/palette658';

const RuntimeView658 = withUniwind(View);

export function Screen658() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView658 styleClassName={layout658.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy658.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy658.detail} / {palette658.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
