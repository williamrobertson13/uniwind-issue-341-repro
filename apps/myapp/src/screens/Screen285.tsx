import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy285 } from '../generated/copy/copy285';
import { layout285 } from '../generated/layouts/layout285';
import { palette285 } from '../generated/palettes/palette285';

const RuntimeView285 = withUniwind(View);

export function Screen285() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView285 styleClassName={layout285.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy285.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy285.detail} / {palette285.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
