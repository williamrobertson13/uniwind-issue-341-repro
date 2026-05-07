import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy728 } from '../generated/copy/copy728';
import { layout728 } from '../generated/layouts/layout728';
import { palette728 } from '../generated/palettes/palette728';

const RuntimeView728 = withUniwind(View);

export function Screen728() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView728 styleClassName={layout728.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy728.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy728.detail} / {palette728.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
