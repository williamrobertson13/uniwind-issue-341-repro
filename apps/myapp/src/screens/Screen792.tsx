import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy792 } from '../generated/copy/copy792';
import { layout792 } from '../generated/layouts/layout792';
import { palette792 } from '../generated/palettes/palette792';

const RuntimeView792 = withUniwind(View);

export function Screen792() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView792 styleClassName={layout792.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy792.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy792.detail} / {palette792.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
